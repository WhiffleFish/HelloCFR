using StaticArrays

const MAT_INFO_KEY = Int

struct MatHist{N}
    h::SVector{N,Int}
end

function Base.length(h::MatHist)
    l = 0
    for a in h.h
        iszero(a) && break
        l += 1
    end
    return l
end

struct IIEMatrixGame{N,T} <: Game{MatHist, MAT_INFO_KEY}
    R::Array{NTuple{N,T}, N}
end

IIEMatrixGame(g::MatrixGame) = IIEMatrixGame(g.R)

IIEMatrixGame() = IIEMatrixGame([
    (0,0) (-1,1) (1,-1);
    (1,-1) (0,0) (-1,1);
    (-1,1) (1,-1) (0,0)
])

CounterfactualRegret.initialhist(::IIEMatrixGame{N}) where N = MatHist(@SVector zeros(Int,N))

CounterfactualRegret.isterminal(::IIEMatrixGame, h::MatHist) = length(h) === length(h.h)

function CounterfactualRegret.utility(game::IIEMatrixGame{N,T}, i::Int, h::MatHist) where {N,T}
    isterminal(game, h) ? game.R[h.h...][i] : zero(T)
end

CounterfactualRegret.player(::IIEMatrixGame, h::MatHist) = length(h)+1

CounterfactualRegret.player(::IIEMatrixGame, k::MAT_INFO_KEY) = k+1

CounterfactualRegret.players(::IIEMatrixGame{N}) where N = N

function CounterfactualRegret.next_hist(::IIEMatrixGame, h::MatHist, a)
    l = length(h)
    return MatHist(setindex(h.h, a, l+1))
end

CounterfactualRegret.infokey(::IIEMatrixGame, h) = length(h)

function CounterfactualRegret.actions(game::IIEMatrixGame, h::MatHist)
    return 1:size(game.R, player(game,h))
end


## extras

function Base.print(io::IO, solver::AbstractCFRSolver{K,G}) where {K,G<:IIEMatrixGame}
    println(io)
    for (k,v) in solver.I
        p = player(solver.game, k)
        σ = copy(v.s)
        σ ./= sum(σ)
        σ = round.(σ, digits=3)
        println(io, "Player: $(p) \t σ: $σ")
    end
end

function cumulative_strategies(hist::Vector{Vector{Float64}})
    Lσ = length(hist[1])
    mat = Matrix{Float64}(undef, length(hist), Lσ)
    σ = zeros(Float64, Lσ)

    for (i,σ_i) in enumerate(hist)
        σ = σ + (σ_i - σ)/i
        mat[i,:] .= σ
    end
    return mat
end

@recipe function f(sol::AbstractCFRSolver{K,G}) where {K,G <: IIEMatrixGame}
    layout --> 2
    link := :both
    framestyle := [:axes :axes]

    xlabel := "Training Steps"

    L1 = length(sol.I[0].σ)
    labels1 = Matrix{String}(undef, 1, L1)
    for i in eachindex(labels1); labels1[i] = L"a_{%$(i)}"; end

    @series begin
        subplot := 1
        ylabel := "Strategy"
        title := "Player 1"
        labels := labels1
        reduce(hcat,sol.I[0].hist)'
    end

    L2 = length(sol.I[1].σ)
    labels2 = Matrix{String}(undef, 1, L2)
    for i in eachindex(labels2); labels2[i] = L"a_{%$(i)}"; end

    @series begin
        subplot := 2
        title := "Player 2"
        labels := labels2
        reduce(hcat,sol.I[1].hist)'
    end
end

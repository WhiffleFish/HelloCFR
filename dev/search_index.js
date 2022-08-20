var documenterSearchIndex = {"docs":
[{"location":"api/#API-Documentation","page":"API Documentation","title":"API Documentation","text":"","category":"section"},{"location":"api/","page":"API Documentation","title":"API Documentation","text":"Docstrings for interface members can be accessed through Julia's built-in documentation system or in the list below.","category":"page"},{"location":"api/","page":"API Documentation","title":"API Documentation","text":"CurrentModule = CounterfactualRegret","category":"page"},{"location":"api/#Contents","page":"API Documentation","title":"Contents","text":"","category":"section"},{"location":"api/","page":"API Documentation","title":"API Documentation","text":"Pages = [\"api.md\"]","category":"page"},{"location":"api/#Index","page":"API Documentation","title":"Index","text":"","category":"section"},{"location":"api/","page":"API Documentation","title":"API Documentation","text":"Pages = [\"api.md\"]","category":"page"},{"location":"api/#Game-Functions","page":"API Documentation","title":"Game Functions","text":"","category":"section"},{"location":"api/","page":"API Documentation","title":"API Documentation","text":"infokeytype\nhisttype\ninitialhist\nisterminal\nutility\nplayer\nchance_action\nchance_actions\nnext_hist\ninfokey\nactions\nplayers\nobservation\nvectorized_info\nvectorized_hist","category":"page"},{"location":"api/#CounterfactualRegret.infokeytype","page":"API Documentation","title":"CounterfactualRegret.infokeytype","text":"infokeytype(g::Game)\n\nReturns information key type for game g\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.histtype","page":"API Documentation","title":"CounterfactualRegret.histtype","text":"histtype(g::Game)\n\nReturns history type for game g\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.initialhist","page":"API Documentation","title":"CounterfactualRegret.initialhist","text":"initialhist(game::Game)\n\nReturn initial history with which to start the game\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.isterminal","page":"API Documentation","title":"CounterfactualRegret.isterminal","text":"isterminal(game::Game, h)\n\nReturns boolean - whether or not current history is terminal \n\ni.e h ∈ Z\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.utility","page":"API Documentation","title":"CounterfactualRegret.utility","text":"utility(game::Game, i::Int, h)\n\nReturns utility of some history h for some player i\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.player","page":"API Documentation","title":"CounterfactualRegret.player","text":"player(game::Game{H,K}, h::H)\n\nReturns integer id corresponding to which player's turn it is at history h 0 - Chance Player 1 - Player 1 2 - Player 2\n\nIf converting to IIE to Matrix Game need to implement:     player(game::Game{H,K}, k::K)\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.chance_action","page":"API Documentation","title":"CounterfactualRegret.chance_action","text":"chance_action(game::Game, h)\n\nReturn randomly sampled action from chance player at a given history\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.chance_actions","page":"API Documentation","title":"CounterfactualRegret.chance_actions","text":"chance_actions(game::Game, h)\n\nReturn all chance actions available for chance player at history h\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.next_hist","page":"API Documentation","title":"CounterfactualRegret.next_hist","text":"next_hist(game::Game, h, a)\n\nGiven some history and action return the next history h′ = next_hist(game, h, a)\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.infokey","page":"API Documentation","title":"CounterfactualRegret.infokey","text":"infokey(game::Game, h)\n\nReturns unique identifier corresponding to some information set \n\ninfokey(game, h1) == infokey(game, h2) ⟺ h1 and h2 belong to the same info set \n\n(key must be immutable as it's being stored as a key in a dictionary)\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.actions","page":"API Documentation","title":"CounterfactualRegret.actions","text":"actions(game::Game, k)\n\nReturns all actions available at some information state given by key k (See infokey)\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.players","page":"API Documentation","title":"CounterfactualRegret.players","text":"players(game)\n\nReturns number of players in game (excluding chance player)\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.observation","page":"API Documentation","title":"CounterfactualRegret.observation","text":"observation(game, h, a, h′)\n\nFor tree building - information given to acting player in history h\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.vectorized_info","page":"API Documentation","title":"CounterfactualRegret.vectorized_info","text":"vectorized_info(game::Game{H,K}, key::K) where {H,K}\n\nFor converting information state representation to vector. Default behavior returns unmodified information state.\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.vectorized_hist","page":"API Documentation","title":"CounterfactualRegret.vectorized_hist","text":"vectorized_hist(game::Game{H}, h::H) where H\n\nFor converting history representation to vector. Default behavior returns unmodified history.\n\n\n\n\n\n","category":"function"},{"location":"api/#Solvers","page":"API Documentation","title":"Solvers","text":"","category":"section"},{"location":"api/","page":"API Documentation","title":"API Documentation","text":"train!\nstrategy\nCFRSolver\nCSCFRSolver\nESCFRSolver\nOSCFRSolver","category":"page"},{"location":"api/#CounterfactualRegret.train!","page":"API Documentation","title":"CounterfactualRegret.train!","text":"train!(sol::AbstractCFRSolver, n; cb=()->(), show_progress::Bool=false)\n\nTrain a CFR solver for n iterations with optional callbacks cb and optional progress bar show_progress\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.strategy","page":"API Documentation","title":"CounterfactualRegret.strategy","text":"strategy(sol::AbstractCFRSolver, k)\n\nReturn the current strategy of solver sol for information key k\n\nIf sufficiently trained (train!), this should be close to a Nash Equilibrium strategy.\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.CFRSolver","page":"API Documentation","title":"CounterfactualRegret.CFRSolver","text":"CFRSolver(game; debug=false, method=Vanilla())\n\nInstantiate vanilla CFR solver with some game.\n\nIf debug=true, record history of strategies over training period, allowing for training history of individual information states to be plotted with Plots.plot(is::DebugInfoState)\n\n\n\n\n\n","category":"type"},{"location":"api/#CounterfactualRegret.CSCFRSolver","page":"API Documentation","title":"CounterfactualRegret.CSCFRSolver","text":"CSCFRSolver(game; debug=false, method=Vanilla())\n\nInstantiate chance sampling CFR solver with some game.\n\nIf debug=true, record history of strategies over training period, allowing for training history of individual information states to be plotted with Plots.plot(is::DebugInfoState)\n\n\n\n\n\n","category":"type"},{"location":"api/#CounterfactualRegret.ESCFRSolver","page":"API Documentation","title":"CounterfactualRegret.ESCFRSolver","text":"ESCFRSolver(game::Game; method::Symbol=:vanilla, alpha::Float64 = 1.0, beta::Float64 = 1.0, gamma::Float64 = 1.0, d::Int)\n\nInstantiate external sampling CFR solver with some game.\n\nSamples a single actions from all players for single tree traversal. Time to complete a traversal is O(|𝒜ᵢ|ᵈ), where d is the depth of the game and |𝒜ᵢ| is the size of the action space for the acting player.\n\n\n\n\n\n","category":"type"},{"location":"api/#CounterfactualRegret.OSCFRSolver","page":"API Documentation","title":"CounterfactualRegret.OSCFRSolver","text":"OSCFRSolver(game; method=Vanilla(), baseline=ZeroBaseline(), ϵ::Float64 = 0.6)\n\nInstantiate outcome sampling CFR solver with some game.\n\nSamples a single actions from all players for single tree traversal. Time to complete a traversal is O(d), where d is the depth of the game. \n\nϵ - exploration parameter\n\nAvailable baselines:\n\nZeroBaseline - Equivalent to no baseline\nExpectedValueBaseline\n\n\n\n\n\n","category":"type"},{"location":"api/#Games","page":"API Documentation","title":"Games","text":"","category":"section"},{"location":"api/","page":"API Documentation","title":"API Documentation","text":"Games.MatrixGame\nGames.Kuhn","category":"page"},{"location":"api/#CounterfactualRegret.Games.MatrixGame","page":"API Documentation","title":"CounterfactualRegret.Games.MatrixGame","text":"Matrix game of arbitrary dimensionality\n\nDefaults to 2-player zero-sum rock-paper-scissors\n\nNOTE: N>2 player general-sum games have ill-defined convergence properties for counterfactual regret solvers\n\n\n\n\n\n","category":"type"},{"location":"api/#CounterfactualRegret.Games.Kuhn","page":"API Documentation","title":"CounterfactualRegret.Games.Kuhn","text":"Kuhn Poker\n\n\"Kuhn poker is an extremely simplified form of poker developed by Harold W. Kuhn as a  simple model zero-sum two-player imperfect-information game, amenable to a complete  game-theoretic analysis. In Kuhn poker, the deck includes only three playing cards,  for example a King, Queen, and Jack. One card is dealt to each player, which may place  bets similarly to a standard poker. If both players bet or both players pass, the player  with the higher card wins, otherwise, the betting player wins.\"\n\nhttps://en.wikipedia.org/wiki/Kuhn_poker\n\n\n\n\n\n","category":"type"},{"location":"api/#Extras","page":"API Documentation","title":"Extras","text":"","category":"section"},{"location":"api/","page":"API Documentation","title":"API Documentation","text":"ExploitabilityCallback\nThrottle\nCallbackChain\nexploitability\nevaluate\nExpectedValueBaseline\nZeroBaseline","category":"page"},{"location":"api/#CounterfactualRegret.ExploitabilityCallback","page":"API Documentation","title":"CounterfactualRegret.ExploitabilityCallback","text":"ExploitabilityCallback(sol::AbstractCFRSolver, n::Int=1; p::Int=1)\n\nsol : \nn   : Frequency with which to query exploitability e.g. n=10 indicates checking exploitability every 10 CFR iterations\np   : Player whose exploitability is being measured\n\nUsage:\n\nusing CounterfactualRegret\nconst CFR = CounterfactualRegret\n\ngame = CFR.Games.Kuhn()\nsol = CFRSolver(game)\ntrain!(sol, 10_000, cb=ExploitabilityCallback(sol))\n\n\n\n\n\n","category":"type"},{"location":"api/#CounterfactualRegret.Throttle","page":"API Documentation","title":"CounterfactualRegret.Throttle","text":"Wraps a function, causing it to trigger every n CFR iterations\n\ntest_cb = Throttle(() -> println(\"test\"), 100)\n\nAbove example will print \"test\" every 100 CFR iterations\n\n\n\n\n\n","category":"type"},{"location":"api/#CounterfactualRegret.CallbackChain","page":"API Documentation","title":"CounterfactualRegret.CallbackChain","text":"Chain together multiple callbacks\n\nUsage:\n\nusing CounterfactualRegret\nconst CFR = CounterfactualRegret\n\n\ngame = CFR.Games.Kuhn()\nsol = CFRSolver(game)\nexp_cb = ExploitabilityCallback(sol)\ntest_cb = Throttle(() -> println(\"test\"), 100)\ntrain!(sol, 10_000, cb=CFR.CallbackChain(exp_cb, test_cb))\n\n\n\n\n\n","category":"type"},{"location":"api/#CounterfactualRegret.exploitability","page":"API Documentation","title":"CounterfactualRegret.exploitability","text":"exploitability(sol::AbstractCFRSolver, p::Int=1)\n\nCalculates exploitability of player p given strategy specified by solver sol\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.evaluate","page":"API Documentation","title":"CounterfactualRegret.evaluate","text":"evaluate(solver::AbstractCFRSolver)\n\nEvaluate full tree traversed by CFR solver. \n\nReturns tuple corresponding to game values for players given the strategies provided by the solver.\n\n\n\n\n\n","category":"function"},{"location":"api/#CounterfactualRegret.ExpectedValueBaseline","page":"API Documentation","title":"CounterfactualRegret.ExpectedValueBaseline","text":"Expected Value Baseline (Schmid 2018)\n\nUses aggregation counterfactual value estimates from previous runs as a baseline. \"Learning rate\" or exponential decay rate for learning the baseline is given by paramter α.\n\nThe stored action values for some information key k are retrieved by calling (b::ExpectedValueBaseline{K})(k, l), where l is the length of the action space at the given information state represented by k.\n\n\n\n\n\n","category":"type"},{"location":"api/#CounterfactualRegret.ZeroBaseline","page":"API Documentation","title":"CounterfactualRegret.ZeroBaseline","text":"Default static baseline of 0 - equivalent to not using a baseline\n\n\n\n\n\n","category":"type"},{"location":"#CounterfactualRegret.jl","page":"CounterfactualRegret.jl","title":"CounterfactualRegret.jl","text":"","category":"section"},{"location":"","page":"CounterfactualRegret.jl","title":"CounterfactualRegret.jl","text":"Documentation for CounterfactualRegret.jl","category":"page"}]
}
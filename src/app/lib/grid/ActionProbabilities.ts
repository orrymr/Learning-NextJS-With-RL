class ActionProbabilities {
    private actionProbabilities: {};

    constructor(){
		this.actionProbabilities = {
			"n": 0.25,
			"s": 0.25,
			"e": 0.25,
			"w": 0.25
		};
	}

    public getActionProbabilities(): {} {
        return this.actionProbabilities;
    }

    public setActionProbabilities(actionProbabilities: {}): void {
        this.actionProbabilities = actionProbabilities;
    }
}
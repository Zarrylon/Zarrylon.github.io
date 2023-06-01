class TimerModel {
    constructor(min, sec) {
        this.minutes = min;
        this.seconds = sec;

        this.def_min = min;
        this.def_sec = sec;

        this.intervalId = null;
        this.listeners = [];
        this.completeListeners = [];
    }

    start() {
        this.intervalId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    pause() {
        clearInterval(this.intervalId);
    }

    stop() {
        clearInterval(this.intervalId);
        this.minutes = this.def_min;
        this.seconds = this.def_sec;
        this.notifyListeners();

        for (let listener of this.completeListeners) {
            listener();
        }
        this.completeListeners = [];
    }

    tick() {
        if (this.seconds > 0) {
            this.seconds--;
        }
        else if (this.minutes > 0) {
            this.seconds = 59;
            this.minutes--;
        }
        else {
            this.stop();
        }
        this.notifyListeners();
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    addCompleteListener(listener) {
        this.completeListeners.push(listener);
    }

    notifyListeners() {
        for (let listener of this.listeners) {
            listener(this.minutes, this.seconds);
        }
    }
}
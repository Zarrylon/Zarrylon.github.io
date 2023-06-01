class TimerView {
    constructor() {
        this.minutesElement = document.getElementById("minutes");
        this.secondsElement = document.getElementById("seconds");

        this.workButton = document.getElementById("work");
        this.pauseButton = document.getElementById("pause");
        this.stopButton = document.getElementById("stop");

        this.workButton.addEventListener("click", () => this.buttonClick("work"));
        this.pauseButton.addEventListener("click", () => this.buttonClick("pause"));
        this.stopButton.addEventListener("click", () => this.buttonClick("stop"));
    }

    setMinutes(minutes) {
        this.minutesElement.textContent = String(minutes).padStart(2, "0");
    }

    setSeconds(seconds) {
        this.secondsElement.textContent = String(seconds).padStart(2, "0");
    }

    setButtonClickListener(listener) {
        this.buttonClickListener = listener;
    }

    buttonClick(buttonId) {
        if (this.buttonClickListener) {
            this.buttonClickListener(buttonId);
        }
    }

    setButtonVisibility(buttonId, visible) {
        const button = this.getButtonElement(buttonId);
        if (visible) {
            button.classList.remove("d-none");
        } else {
            button.classList.add("d-none");
        }
    }

    getButtonElement(buttonId) {
        switch (buttonId) {
            case "work":
                return this.workButton;
            case "pause":
                return this.pauseButton;
            case "stop":
                return this.stopButton;
        }
    }

    updateTime(minutes, seconds) {
        this.minutesElement.textContent = minutes.toString().padStart(2, "0");
        this.secondsElement.textContent = seconds.toString().padStart(2, "0");
    }
}
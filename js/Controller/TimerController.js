class TimerController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.taskList = [];
        this.taskName = null;
        this.startTime = null;
        this.endTime = null;

        this.wasPaused = false;
        this.isShown = true;

        this.view.setButtonClickListener((buttonId) => this.onButtonClick(buttonId));
        this.model.addListener((minutes, seconds) => this.onTimeChange(minutes, seconds));
        this.model.addCompleteListener(() => this.onTimerComplete());

        this.view.setMinutes(model.minutes);
        this.view.setSeconds(model.seconds);
    }

    onButtonClick(buttonId) {
        switch (buttonId) {
            case "work":
                this.view.setButtonVisibility("work", false);
                this.view.setButtonVisibility("pause", true);
                this.view.setButtonVisibility("stop", true);
                this.model.start();

                this.isShown = true;

                if (!this.wasPaused)
                    this.startTime = new Date().toLocaleTimeString();
                break;
            case "pause":
                this.view.setButtonVisibility("work", true);
                this.view.setButtonVisibility("pause", false);
                this.view.setButtonVisibility("stop", true);
                this.wasPaused = true;
                this.model.pause();
                break;
            case "stop":
                this.endTime = new Date().toLocaleTimeString();
                this.view.setButtonVisibility("work", true);
                this.view.setButtonVisibility("pause", false);
                this.view.setButtonVisibility("stop", false);
                this.wasPaused = false;

                if (this.isShown) {
                    this.taskName = prompt('Enter the name of the session:');

                    if (this.taskName !== null && this.taskName !== '') {
                        var taskItem = document.createElement('li');
                        taskItem.innerText = this.taskName + ' : ' + this.startTime + ' - ' + this.endTime;
                        document.getElementById('task-list').appendChild(taskItem);
                    }
                    this.isShown = false;
                }
                this.model.stop();
                break;
        }
    }

    onTimeChange(minutes, seconds) {
        this.view.updateTime(minutes, seconds);
    }

    onTimerComplete() {
        this.onButtonClick("stop");
    }
}
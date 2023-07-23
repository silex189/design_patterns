import {Subject} from "../interfaces/Subject";
import {RealSubject} from "../services/RealSubject";

/** Service Proxy */
class Proxy implements Subject {
    private realSubject!: RealSubject;

    public constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: Checking access prior to triggering a real request');

        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Logging the current request...');
    }

}

export { Proxy };
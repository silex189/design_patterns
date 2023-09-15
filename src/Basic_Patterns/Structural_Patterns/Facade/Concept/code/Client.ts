import {Subsystem2} from "./subsystems/Subsystem2";
import {Subsystem1} from "./subsystems/Subsystem1";
import {Facade} from "./Facade";

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);

console.log(facade.operation());

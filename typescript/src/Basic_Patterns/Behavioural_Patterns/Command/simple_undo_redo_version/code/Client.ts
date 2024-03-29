import {AddCommand} from "src/Basic_Patterns/Behavioural_Patterns/Command/simple_undo_redo_version/code/AddCommand";
import {CommandInvoker} from "src/Basic_Patterns/Behavioural_Patterns/Command/simple_undo_redo_version/code/commands/CommandInvoker";

let list: string[] = [];
const invoker: CommandInvoker = new CommandInvoker();

invoker.execute(new AddCommand(list, 'item a'));
invoker.execute(new AddCommand(list, 'item b'));
console.log('Showing the list after adding two items:');
console.log(list); // Prints: [ 'item a', 'item b' ]

invoker.undo();
console.log('Showing the list after undoing the last command:');
console.log(list); // Prints: [ 'item a' ]

invoker.redo();
console.log('Showing the list after redoing the last command:');
console.log(list); // Prints: [ 'item a', 'item b' ]

invoker.execute(new AddCommand(list, 'item c'));
invoker.execute(new AddCommand(list, 'item d'));
console.log('Showing the list after adding two items:');
console.log(list); // Prints: [ 'item a', 'item b', 'item c', 'item d' ]

invoker.undo();
invoker.undo();
invoker.undo();
console.log('Showing the list after undoing the last three commands:')
console.log(list); // Prints: [ 'item a' ]

invoker.undo();
console.log('Showing the list after undoing the last command:')
console.log(list); // Prints: []

invoker.undo();
console.log('Showing the list after undoing the last command again:')
console.log(list); // Prints: []

invoker.redo();
console.log('Showing the list after redoing the last command:')
console.log(list); // Prints: [ 'item a' ]
import {DataSource} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/DataSource";
import {FileDataSource} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/FileDataSource";
import {
    EncryptionDecorator
} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/decorators/EncryptionDecorator";
import {
    CompressionDecorator
} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/decorators/CompressionDecorator";
import {SalaryManager} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/SalaryManager";

class ApplicationConfigurator {
    public configurationExample(enabledEncryption: boolean, enabledCompression: boolean) {
        let source: DataSource = new FileDataSource('salary.dat');

        if (enabledEncryption) {
            source = new EncryptionDecorator(source);
        }

        if (enabledCompression) {
            source = new CompressionDecorator(source);
        }

        const logger = new SalaryManager(source);
        const salary = logger.load();
    }
}

export { ApplicationConfigurator };
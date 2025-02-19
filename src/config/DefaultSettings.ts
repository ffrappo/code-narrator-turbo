import ConfigurationBuilder from "../documentation/plugins/builders/Configuration/ConfigurationBuilder";
import FilesBuilder from "../documentation/plugins/builders/Files/FilesBuilder";
import FoldersBuilder from "../documentation/plugins/builders/Folders/FoldersBuilder";
import UserDefinedBuilder from "../documentation/plugins/builders/UserDefined/UserDefinedBuilder";
import ICodeNarratorConfig from "./ICodeNarratorConfig";
import FileStructure from "../utils/FileStructure";
import path from "path";
import OpenAIService from "../services/OpenAIService";

export default class DefaultSettings {
    static gptModel = 'gpt-4';
    public static get() {

        return {
            config_files: ["code-narrator-turbo.config.ts"],
            project_file: "package.json",//if you have specific app config file, e.g. for code-narrator-turbo, "code-narrator-turbo.config.ts" is the app config file
            entry_file: "./src/App.ts",
            cli_file: "./src/cli.ts",
            project_path: "./",
            source_path: "./src",
            documentation_path: "./docs",
            test_path: "./test",
            exclude: this.getFilesToExclude(),
            readmeRoot: true,
            repository_url : "https://github.com/ffrappo/code-narrator-turbo",

            //Order of plugins matter, ConfigurationGenerator runs first to get overview of the project.
            builderPlugins: [
                ConfigurationBuilder, FilesBuilder, FoldersBuilder, UserDefinedBuilder
            ],
            gptSystemCommands: [
                'Act as a documentation expert for software',
                'If there is :::note, :::info, :::caution, :::tip, :::danger in the text, extract that from its location and format it correctly',
                `Return your answer in {DocumentationType} format`,
                `If you notice any secret information, replace it with ***** in your response`
            ],
            documentation_type: 'md', //What format should be generated, e.g. md, sphinx
            document_file_extension: ".md",
            folderRootFileName : 'README',
            cache_file: '.code-narrator-turbo/cache.json', //location of the cache file. :::warning '.code-narrator-turbo/cache.json' should be committed into git.
            gptModel : this.gptModel,
            aiService : new OpenAIService()
        } as ICodeNarratorConfig
    }

    private static getFilesToExclude() {
        let gitIgnore = FileStructure.getContent(path.join(process.cwd(), '.gitignore')).trim().split('\n');
        gitIgnore = gitIgnore.map(item => item.trim()).filter(item => item !== '')
        let defaults = ['/node_modules', '.env', '/.idea', '/.git',
            '.gitignore', '/.code-narrator-turbo', '/dist', '/build', 'package-lock.json']

        const uniqueArray = [...new Set([...gitIgnore, ...defaults])];
        return uniqueArray;
    }
}
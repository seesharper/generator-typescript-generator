declare function download(repo : string, destination :any, callBack : (err : any) => void);	


declare module "download-github-repo" {
    export = download;
}



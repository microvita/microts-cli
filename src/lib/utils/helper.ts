import * as fs from "fs";
import git from "isomorphic-git";
import http from "isomorphic-git/http/node";

export const GenerateApp = async (dirName: string): Promise<void> => {
  await git.clone({
    fs,
    http,
    dir: dirName,
    url: "https://github.com/microlinux-tech/micro-ts-node",
    singleBranch: true,
  });
};

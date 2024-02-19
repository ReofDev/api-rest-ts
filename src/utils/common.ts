

/**
 * @description this function delete the extension .ts from fileName
 * @param fileName 
 * @returns {string}
 */
const cleanFileName = (fileName: string): string | undefined => {
    const file = fileName.split('.').shift()
    return file
}


export {
    cleanFileName
}
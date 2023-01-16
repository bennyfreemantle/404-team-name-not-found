declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MOVIEDB_API_KEY: string; // this is the line you want
    
    }
  }
}
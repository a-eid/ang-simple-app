// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import and serve the root module 
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

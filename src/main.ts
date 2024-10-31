import { AppComponent } from 'src/app/components/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import routeConfig from 'src/app/routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routeConfig), provideHttpClient(withFetch())],
}).catch((err) => console.error(err));

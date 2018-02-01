import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'AureliaCoreApp';
        config.map([
            {
                route: ['', 'home'],
                name: 'home',
                settings: { icon: 'home' },
                moduleId: PLATFORM.moduleName('../home/home'),
                nav: true,
                title: 'Home'
            },
            {
                route: 'fetch-data',
                name: 'fetchdata',
                settings: { icon: 'th-list' },
                moduleId: PLATFORM.moduleName('../fetchdata/fetchdata'),
                nav: true,
                title: 'Fetch data'
            },
            {
                route: 'hourview',
                name: 'hourview',
                settings: { icon: 'th-list' },
                moduleId: PLATFORM.moduleName('../hourview/hourview'),
                nav: true,
                title: 'Hourview'
            },
            {
                route: 'meetingitem',
                name: 'meetingitem',
                settings: { icon: 'th-list' },
                moduleId: PLATFORM.moduleName('../meetingitem/meetingitem'),
                nav: true,
                title: 'Meeting item'
            }
        ]);

        this.router = router;
    }
}

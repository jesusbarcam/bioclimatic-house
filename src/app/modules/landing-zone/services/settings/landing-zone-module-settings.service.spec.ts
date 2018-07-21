import { TestBed, inject } from '@angular/core/testing';

import { LandingZoneModuleSettings } from './landing-zone-module-settings.service';

describe('LandingZoneModuleSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LandingZoneModuleSettings]
    });
  });

  it('should be created', inject([LandingZoneModuleSettings], (service: LandingZoneModuleSettings) => {
    expect(service).toBeTruthy();
  }));
});

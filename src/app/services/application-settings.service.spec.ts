import { TestBed, inject } from '@angular/core/testing';

import { ApplicationSettingsService } from './application-settings.service';

describe('ApplicationSettingsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationSettingsService]
    });
  });

  it('should be created', inject([ApplicationSettingsService], (service: ApplicationSettingsService) => {
    expect(service).toBeTruthy();
  }));
});

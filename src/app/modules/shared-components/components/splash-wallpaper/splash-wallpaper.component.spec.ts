import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashWallpaperComponent } from './splash-wallpaper.component';

describe('SplashWallpaperComponent', () => {
  let component: SplashWallpaperComponent;
  let fixture: ComponentFixture<SplashWallpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashWallpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

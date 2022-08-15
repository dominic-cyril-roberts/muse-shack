import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LyricsComponent } from './lyrics.component';


describe('SongDetailComponent', () => {
  let component: LyricsComponent;
  let fixture: ComponentFixture<LyricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

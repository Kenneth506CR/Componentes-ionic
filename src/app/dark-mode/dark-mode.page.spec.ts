import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkModePage } from './dark-mode.page';

describe('DarkModePage', () => {
  let component: DarkModePage;
  let fixture: ComponentFixture<DarkModePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DarkModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}


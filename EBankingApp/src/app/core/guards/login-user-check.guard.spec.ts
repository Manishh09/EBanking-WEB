import { TestBed } from '@angular/core/testing';

import { LoginUserCheckGuard } from './login-user-check.guard';

describe('LoginUserCheckGuard', () => {
  let guard: LoginUserCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginUserCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

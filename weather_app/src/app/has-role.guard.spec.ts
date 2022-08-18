import { TestBed } from '@angular/core/testing';

import { HasRoleGuard } from './has-role.guard';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';

describe('HasRoleGuard', () => {
  let guard: HasRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ RouterTestingModule ],
      providers: [ AuthService ]
    });
    guard = TestBed.inject(HasRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

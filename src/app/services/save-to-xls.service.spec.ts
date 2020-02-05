/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SaveToXlsService } from './save-to-xls.service';

describe('Service: SaveToXls', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveToXlsService]
    });
  });

  it('should ...', inject([SaveToXlsService], (service: SaveToXlsService) => {
    expect(service).toBeTruthy();
  }));
});

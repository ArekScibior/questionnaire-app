/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetDataFileService } from './get-data-file.service';

describe('Service: GetDataFile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDataFileService]
    });
  });

  it('should ...', inject([GetDataFileService], (service: GetDataFileService) => {
    expect(service).toBeTruthy();
  }));
});

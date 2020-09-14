import { Test, TestingModule } from '@nestjs/testing';
import { UserModuleService } from './user-module.service';

describe('UserModuleService', () => {
  let service: UserModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserModuleService],
    }).compile();

    service = module.get<UserModuleService>(UserModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

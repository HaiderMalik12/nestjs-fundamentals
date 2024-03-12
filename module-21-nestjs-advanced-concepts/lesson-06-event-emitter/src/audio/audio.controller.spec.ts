import { Test, TestingModule } from '@nestjs/testing';
import { AudioController } from './audio.controller';

describe('AudioController', () => {
  let controller: AudioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AudioController],
    }).compile();

    controller = module.get<AudioController>(AudioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

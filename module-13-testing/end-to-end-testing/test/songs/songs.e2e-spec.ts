import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from '../../src/song/song.entity';
import { SongModule } from '../../src/song/song.module';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { CreateSongDTO } from 'src/song/dto/create-song-dto';
import { UpdateSongDTO } from 'src/song/dto/update-song-dto';

describe('Songs - /songs', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          url: 'postgres://postgres:root@localhost:5432/test-dev',
          synchronize: true,
          entities: [Song],
          dropSchema: true,
        }),
        SongModule,
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    // Fetch all the entities
    const songRepository = app.get('SongRepository');
    await songRepository.clear();
  });

  const createSong = (createSongDTO: CreateSongDTO): Promise<Song> => {
    const song = new Song();
    song.title = createSongDTO.title;
    const songRepo = app.get('SongRepository');
    return songRepo.save(song);
  };

  it(`/GET songs`, async () => {
    const newSong = await createSong({ title: 'Animals' });
    const results = await request(app.getHttpServer()).get('/songs');
    expect(results.statusCode).toBe(200);
    expect(results.body).toHaveLength(1);
    expect(results.body).toEqual([newSong]);
  });

  it('/GET songs/:id', async () => {
    const newSong = await createSong({ title: 'Animals' });
    const results = await request(app.getHttpServer()).get(
      `/songs/${newSong.id}`,
    );
    expect(results.statusCode).toBe(200);
    expect(results.body).toEqual(newSong);
  });

  it('/PUT songs/:id', async () => {
    const newSong = await createSong({ title: 'Animals' });
    const updateSongDTO: UpdateSongDTO = { title: 'Wonderful' };
    const results = await request(app.getHttpServer())
      .put(`/songs/${newSong.id}`)
      .send(updateSongDTO as UpdateSongDTO);
    expect(results.statusCode).toBe(200);
    expect(results.body.affected).toEqual(1);
  });

  it('/POST songs', async () => {
    const createSongDTO = { title: 'Animals' };
    const results = await request(app.getHttpServer())
      .post(`/songs`)
      .send(createSongDTO as CreateSongDTO);
    expect(results.status).toBe(201);
    expect(results.body.title).toBe('Animals');
  });

  it('/DELETE songs', async () => {
    const createSongDTO: CreateSongDTO = { title: 'Animals' };
    const newSong = await createSong(createSongDTO);
    const results = await request(app.getHttpServer()).delete(
      `/songs/${newSong.id}`,
    );
    expect(results.statusCode).toBe(200);
    expect(results.body.affected).toBe(1);
  });
});

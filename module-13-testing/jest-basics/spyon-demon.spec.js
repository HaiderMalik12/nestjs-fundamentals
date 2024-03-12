const songRepository = {
  create: (createSongDTO) => {
    // Original method implementation
  },
  find: () => {},
  findOne: (id) => {},
};

class ArtistRepository {
  save(createArtistDTO) {
    // Original method implementation
  }
}

describe('spyOn Demo', () => {
  it('should spyon the existing object method', () => {
    const spy = jest.spyOn(songRepository, 'create'); //1
    songRepository.create({ title: 'Lover' });

    console.log(spy.mock.calls.length);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({ title: 'Lover' });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should spy on the class method', () => {
    const artist = new ArtistRepository();
    const spy = jest
      .spyOn(artist, 'save')
      .mockImplementation((createArtistDTO) => ({ ...createArtistDTO, id: 1 }));

    // Call the method
    artist.save({ name: 'Martin Garrix' }); //1

    console.log(spy({ name: 'Martin Garrix' }));
    // Assertions
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({ name: 'Martin Garrix' });
    expect(spy.mock.calls.length).toBe(2);
  });

  afterEach(() => jest.resetAllMocks());
});

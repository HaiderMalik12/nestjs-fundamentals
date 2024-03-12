describe('Mock Function Examples', () => {
  it('should create a basic mock function', () => {
    const mockFun = jest.fn();
    mockFun.mockReturnValue(4);

    expect(mockFun()).toBe(4);
    expect(mockFun()).toBe(4);
    expect(mockFun.mock.calls.length).toBe(2);
    expect(mockFun).toHaveBeenCalled();
  });

  it('should create a mock function with an argument', () => {
    const mockCreateSong = jest.fn((createSongDTO) => ({
      ...createSongDTO,
      id: 1,
    }));
    expect(mockCreateSong({ title: 'Lover' })).toEqual({
      title: 'Lover',
      id: 1,
    });
  });

  it('should create a mock function with an argument with mock implementation', () => {
    const mockCreateSong = jest.fn();
    mockCreateSong.mockImplementation((createSongDTO) => ({
      ...createSongDTO,
      id: 1,
    }));
    expect(mockCreateSong({ title: 'Lover' })).toEqual({
      title: 'Lover',
      id: 1,
    });
  });

  it('should create a mock function with promise', () => {
    const fetchSongs = jest.fn();
    fetchSongs.mockResolvedValue([{ id: 1, title: 'Lover' }]);

    expect(fetchSongs()).resolves.toEqual([{ id: 1, title: 'Lover' }]);
    expect(fetchSongs()).resolves.toHaveLength(1);
  });
});

import stringsModule from './strings';

const { getStringByLanguage } = stringsModule;

const strings = {
  en: { submit: 'submit'},
  emoji: { submit: '🚀'},
  mermish: {},
}


describe("language string testing", ()=> {

  const mockWarn = jest.fn();

  let originalWarn;

  beforeEach(()=> {
    originalWarn = console.warn;
    console.warn = mockWarn;
  })

  afterEach(()=> {
    console.warn = originalWarn;
  })

  test('returns correct submit string for English', ()=> {
    const string = getStringByLanguage('en', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).not.toHaveBeenCalled();
  })
  
  test('returns correct submit string for Emoji', ()=> {
    const string = getStringByLanguage('emoji', 'submit', strings);
    expect(string).toBe('🚀')
    expect(mockWarn).not.toHaveBeenCalled();
  })
  
  test('returns english submit string when language does not exist', ()=> {
    const string = getStringByLanguage('notALanguage', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).toHaveBeenCalledWith("Could not get string [submit] for [notALanguage]");
  })
  
  test('returns english submit string when language key does not exist for language', ()=> {
    const string = getStringByLanguage('mermish', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).toHaveBeenCalledWith("Could not get string [submit] for [mermish]");

  })
})
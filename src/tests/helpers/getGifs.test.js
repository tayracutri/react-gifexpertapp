import { getGifs } from "../../components/helpers/GetGifs";

describe('test on getgifs', () => {
    test('should show 20 components', async () => {
        const gifs = await getGifs('Dani');

        expect(gifs.length).toBe(20);
    })
})
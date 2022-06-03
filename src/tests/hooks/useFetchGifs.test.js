import { useFecthGifs } from "../../components/hooks/useFecthGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('tets on usefetchgif hook', () => {

    test('should return the initial state', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFecthGifs('Dani'));
        const { data, loading } = result.current;

        await waitForNextUpdate({ timeout: 3000 });

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('should return 20 gifs and a false loading', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFecthGifs('Dani'));
        await waitForNextUpdate({ timeout: 3000 })
        const { data, loading } = result.current;

        expect(data.length).toBe(20);
        expect(loading).toBe(false);
    });

});

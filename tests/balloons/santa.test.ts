import { Santa } from '@/balloons';

describe('Santa Balloon', () => {
  test('uses its Santa artwork and its own pop sound', () => {
    const balloon = new Santa();

    expect(balloon.name).toBe('santa');
    expect(balloon.balloonImageUrl).toContain('/santa/balloon.svg');
    expect(balloon.popSoundUrl).toContain('/santa/santa pop.mp3');
  });
});

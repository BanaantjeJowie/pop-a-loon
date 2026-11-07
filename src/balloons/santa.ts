import Default, { BalloonOptions } from './default';
import { random } from '@/utils';

const SNOW_PARTICLE_COUNT = 32;
const SNOW_DURATION_MS = 2800;

export default class Santa extends Default {
  public static readonly spawn_chance: number = 0.08;

  // @ts-ignore
  public get name(): 'santa' {
    return 'santa';
  }

  public get options(): BalloonOptions {
    return {
      ...super.options,
      imageUrl: 'balloon.svg',
      popSoundUrl: 'pop.mp3',
    };
  }

  public build(): void {
    super.build();
    this.importStylesheet('santa.css');
  }

  public async pop(event: MouseEvent): Promise<void> {
    super.pop(event);
    this.createSnow(event);
  }

  private createSnow(event?: MouseEvent): void {
    const snow = document.createElement('div');
    snow.className = 'santa-snow';
    snow.setAttribute('aria-hidden', 'true');
    snow.style.left = `${event?.clientX ?? window.innerWidth / 2}px`;
    snow.style.top = `${event?.clientY ?? window.innerHeight / 2}px`;

    const particles = document.createDocumentFragment();
    for (let index = 0; index < SNOW_PARTICLE_COUNT; index += 1) {
      const particle = document.createElement('i');
      particle.className = 'santa-snowflake';
      particle.style.setProperty('--snow-size', `${random(3, 8)}px`);
      particle.style.setProperty('--snow-drift', `${random(-90, 90)}px`);
      particle.style.setProperty('--snow-fall', `${random(60, 170)}px`);
      particle.style.setProperty('--snow-rotation', `${random(-180, 180)}deg`);
      particle.style.setProperty(
        '--snow-duration',
        `${random(1900, SNOW_DURATION_MS)}ms`
      );
      particle.style.setProperty('--snow-delay', `${random(250)}ms`);
      particles.appendChild(particle);
    }

    snow.appendChild(particles);
    document.body.appendChild(snow);
    window.setTimeout(() => snow.remove(), SNOW_DURATION_MS + 300);
  }
}

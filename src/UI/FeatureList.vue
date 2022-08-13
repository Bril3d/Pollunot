
<template>
  <div class="py-12 bg-white" id="feature">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Less jobless people along saving the environment</p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">This is a chance to make our country cleaner and make it a better place.</p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'We use the 12dt/15kg Plastic as a rate of profit',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'We don\'t take any fees at the process, What you give is what you take!',
    icon: ScaleIcon,
  },
  {
    name: 'Less Bullies ',
    description:
      'This way we will make sure that we have less bullies to public job positions',
    icon: LightningBoltIcon,
  },
  {
    name: 'Motivational',
    description:
      'We motivate all people to help saving the earth of one of the most natural disasters exists "Pollution"',
    icon: AnnotationIcon,
  },
]

export default {
  setup() {
    return {
      features,
    }
  },
}
</script>
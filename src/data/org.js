export const president = {
  name: 'Laurent',
  role: 'Président',
}

export const departments = [
  {
    id: 'secretariat',
    title: 'Secrétariat',
    icon: 'secretariat',
    people: [
      { name: 'Wallid', role: 'Secrétaire' },
    ],
  },
  {
    id: 'tresorerie',
    title: 'Trésorerie',
    icon: 'tresorerie',
    people: [
      { name: 'Hugues', role: 'Trésorerie' },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: 'marketing',
    people: [
      { name: 'Jeannot', role: 'Marketing' },
      { name: 'Michel', role: 'Marketing · Logistique · Food', multi: true },
      { name: 'Greg', role: 'Marketing · Logistique · Food', multi: true },
    ],
  },
  {
    id: 'informatique',
    title: 'Informatique',
    icon: 'informatique',
    people: [
      { name: 'Dominique', role: 'IT · Software developer' },
    ],
  },
  {
    id: 'logistique',
    title: 'Logistique',
    icon: 'logistique',
    people: [
      { name: 'Will', role: 'Logistique' },
      { name: 'philippe', role: 'Logistique' },
      { name: 'An "du Colorado"', role: 'Logistique', foodTag: 'Restauration' },
      { name: 'Michel', role: 'Logistique · Marketing', multi: true, foodTag: 'Food' },
      { name: 'Greg', role: 'Logistique · Marketing', multi: true, foodTag: 'Food' },
    ],
  },
]

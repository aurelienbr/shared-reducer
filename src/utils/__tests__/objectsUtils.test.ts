import { updateObjectInArray, deleteObjectInArray } from '../objectUtils';

describe('updateObjectInArray', () => {
  let array: Array<{id: number; title: string; action: string}> = [];
  const error = 'The ID is not defined';

  beforeEach(() => {
    array = [
      {
        id: 1,
        title: 'mon ami',
        action: 'test de fidélité'
      },
      { id: 2, title: 'mon ennemi', action: 'test de fidélité' }
    ];
  });

  test('update an object in array', () => {
    const newArray = [
      { id: 1, title: 'mon ami', action: 'test de fidélité' },
      { id: 2, title: 'mon meilleur amis', action: 'test de fidélité' }
    ];

    const objectToUpdate = { id: 2, title: 'mon meilleur amis', action: 'test de fidélité' };

    expect(updateObjectInArray(array, objectToUpdate)).toEqual(newArray);
  });
});

test('delete an object in array', () => {
  const array = [
    { id: 1, title: 'mon ami', action: 'test de fidélité' },
    { id: 2, title: 'mon ennemi', action: 'test de fidélité' }
  ];

  const newArray = [{ id: 1, title: 'mon ami', action: 'test de fidélité' }];

  const objectToDelete = { id: 2, title: 'mon meilleur amis', action: 'test de fidélité' };

  expect(deleteObjectInArray(array, objectToDelete)).toEqual(newArray);
});

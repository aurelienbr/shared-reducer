/* eslint-disable @typescript-eslint/no-explicit-any */
function flattenNextLevel (res: Record<string, string>, key: string, val: string, pre = ''): Record<string, string> {
  const prefix = [pre, key].filter(v => v).join('.');
  return typeof val === 'object'
    ? Object.keys(val).reduce((prev, curr) => flattenNextLevel(prev, curr, val[curr], prefix), res)
    : Object.assign(res, { [prefix]: val });
}

// eslint-disable-next-line import/prefer-default-export
export function flatten (toFlatten: Record<string, any>): Record<string, string> {
  return Object.keys(toFlatten).reduce((prev, curr) => flattenNextLevel(prev, curr, toFlatten[curr]), {});
}

/*
we shall find a better way to handle our objects here,
*/

// we shall be able to pass the key we want to check

export const isKeyInArrayObjects = () => {};

export const addObjectInArray = (array: any, object: any): Array<any> => [...array, object];

export const isObjectInArray = (array: any, object: any) => array.findIndex((element: any) => element.id === object.id);

export const updateObjectInArray = (array: any, object: any): any => {
  const updatedArray = array.map((item: any) => {
    if (item.id !== object.id) {
      return item;
    }
    return {
      ...item,
      ...object
    };
  });
  return updatedArray;
};

export const deleteObjectInArray = (array: any, object: any) => {
  const index = array.findIndex((element: any) => element.id === object.id);
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

import ClassRoom from './0-classroom';

/**
 * Creates an array of classrooms with specific sizes.
 * @returns An array of classrooms.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}

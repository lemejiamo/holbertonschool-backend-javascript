export default class HolbertonCourse {
  constructor(name = '', length = 0, students = ['']) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * @param {string} name
   */
  set name(name) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  /**
 * @param {number} name
 */
  set length(length) {
    if (typeof (length) === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  /**
  * @param {Array: string} name
  */
  set students(students) {
    try {
      students.forEach((element) => {
        if (typeof (element) !== 'string') throw new TypeError('Students must be an array of strings');
      });
    } catch (error) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

}

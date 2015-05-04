var ClassVehicle = (function () {
  /* Tiny References */
  var C = ClassVehicle;
  var p = C.prototype;

  /**
   * @constructor
   * This class will handle all extending and implementation of any class-level features.
   */
  function ClassVehicle() {
    /* Stats on usage */
    this.baseCount = 0;
    this.extendCount = 0;
  }

  /* ----- Public Variables ----- */

  /* ----- Public Methods ----- */
  /**
   * Sets up a 'base' class. This is a class that does not extend anything. This method will cover any default functionality that
   * belongs to 'base classes'.
   *
   * @param isAbstract {boolean} - Is this class able to be instantiated?
   * @param BaseClass {*} - The 'Base' Class (that has no parents)
   */
  p.setupClass = function (isAbstract, BaseClass) {
    this._setupAbstract(isAbstract, BaseClass);

    this.baseCount++;
  };
  /**
   * Sets up a class that extends another class. This method will cover any default functionality that is needed to extend another
   * class.
   *
   * @param isAbstract {boolean} - Is this class able to be instantiated?
   * @param ThisClass {*} - The class we are creating
   * @param ParentClass {*} - The class that we are extending
   */
  p.setupClassExtend = function (isAbstract, ThisClass, ParentClass) {
    /* Copy all the static parent properties over */
    for (var prop in ParentClass) if (ParentClass.hasOwnProperty(prop)) ThisClass[prop] = ParentClass[prop];

    /* Create a shell object that will simply call this object, but allows/is needed for full extension */
    function DummyClass() { this.constructor = ThisClass; }
    DummyClass.prototype = ParentClass.prototype;
    ThisClass.prototype = new DummyClass();

    /* Setup Abstract-ness */
    this._setupAbstract(isAbstract, ThisClass);

    this.extendCount++;
  };
  /**
   * Checks the class to see if it can be instantiated. Should be called at the start of every instantiable constructor.
   *
   * @param ThisClass {*} - The class that we are instantiating
   */
  p.checkAbstract = function (ThisClass) {
    if (ThisClass.isAbstract && this.isAbstract) {
      // Throw Error
      throw new Error(ThisClass.name + " is abstract and cannot be created directly.");
    }
  };

  /* ----- Private Variables ----- */

  /* ----- Private Methods ----- */
  p._setupAbstract = function (isAbstract, BaseClass) {
    /* Sets the abstract-ness; used in this.checkAbstract() */
    BaseClass.isAbstract = isAbstract;
    BaseClass.prototype.isAbstract = isAbstract;
  };
  
  // Executes a new and returns the, now singleton, object
  var self = new ClassVehicle(); // useful for internal referencing
  return self;
})();
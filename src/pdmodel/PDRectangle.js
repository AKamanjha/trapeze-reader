goog.provide("trapeze.pdmodel.PDRectangle");
trapeze.pdmodel.PDRectangle = function(array) {	this.rectArray = array;		/**     * This will get the width of this rectangle as calculated by     * upperRightX - lowerLeftX.     *     * @return The width of this rectangle.     */    this.getWidth = function()    {        return this.getUpperRightX() - this.getLowerLeftX();    };    /**     * This will get the height of this rectangle as calculated by     * upperRightY - lowerLeftY.     *     * @return The height of this rectangle.     */    this.getHeight = function()    {        return this.getUpperRightY() - this.getLowerLeftY();    };			/**     * This will get the lower left x coordinate.     *     * @return The lower left x .     */    this.getLowerLeftX = function()    {        return this.rectArray.get(0).value;    };		/**     * This will get the lower left y coordinate.     *     * @return The lower left y .     */    this.getLowerLeftY = function()    {        return this.rectArray.get(1).value;    };	/**     * This will get the upper right x coordinate.     *     * @return The upper right x .     */    this.getUpperRightX = function()    {        return this.rectArray.get(2).value;    };		/**     * This will get the upper right y coordinate.     *     * @return The upper right y .     */    this.getUpperRightY = function()    {        return this.rectArray.get(3).value;    };		this.getMinX = function() {		var x1 = this.getLowerLeftX();		var x2 = this.getUpperRightX();		if(x1 < x2)			return x1		return x2;	};	this.getMinY = function() {		var y1 = this.getLowerLeftY();		var y2 = this.getUpperRightY();		if(y1 < y2)			return y1		return y2;	};};
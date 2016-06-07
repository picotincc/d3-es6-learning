(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LineChart = require("./chart/LineChart");

var _LineChart2 = _interopRequireDefault(_LineChart);

var _PieChart = require("./chart/PieChart");

var _PieChart2 = _interopRequireDefault(_PieChart);

var _StackAreaChart = require("./chart/StackAreaChart");

var _StackAreaChart2 = _interopRequireDefault(_StackAreaChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var keys = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"];
var colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];

var Application = function () {
    function Application() {
        _classCallCheck(this, Application);
    }

    _createClass(Application, [{
        key: "run",
        value: function run() {
            this.displayStackedAreaChart();
        }
    }, {
        key: "displayLineChart",
        value: function displayLineChart() {
            console.log("The application is running now ...");

            var data1 = [{ month: 0, value: 5 }, { month: 1, value: 5 }, { month: 2, value: 5 }, { month: 3, value: 5 }, { month: 4, value: 5 }, { month: 5, value: 5 }, { month: 6, value: 5 }, { month: 7, value: 5 }, { month: 8, value: 5 }, { month: 9, value: 5 }, { month: 10, value: 5 }, { month: 11, value: 5 }, { month: 12, value: 5 }];
            var data2 = [{ month: 0, value: 2 }, { month: 1, value: 4 }, { month: 2, value: 5 }, { month: 3, value: 6 }, { month: 4, value: 6 }, { month: 5, value: 9 }, { month: 6, value: 6 }, { month: 7, value: 4 }, { month: 8, value: 3 }, { month: 9, value: 0 }, { month: 10, value: 4 }, { month: 11, value: 6 }, { month: 12, value: 3 }];

            var lineChart = new _LineChart2.default({
                width: 700,
                height: 400,
                margin: { top: 20, right: 30, bottom: 20, left: 30 },
                data1: data1,
                data2: data2,
                xPath: "month",
                yPath: "value"
            });

            setTimeout(function () {
                data2[5]["value"] = 6;
                data2[9]["value"] = 2;

                lineChart.render();
            }, 1000);
        }
    }, {
        key: "randomData",
        value: function randomData() {
            return keys.map(function (key) {
                return { key: key, value: Math.random() };
            });
        }
    }, {
        key: "runPieChart",
        value: function runPieChart() {
            var pie = new _PieChart2.default({
                width: 500,
                height: 400,
                margin: {
                    top: 30,
                    right: 30,
                    bottom: 30,
                    left: 30
                },
                data: randomData(),
                colors: colors
            });

            d3.select(".refresh").on("click", function () {
                pie.refresh(randomData());
            });
        }
    }, {
        key: "displayStackedAreaChart",
        value: function displayStackedAreaChart() {
            var stackData = [{ month: 0, a: 20, b: 30, c: 50 }, { month: 1, a: 20, b: 30, c: 50 }, { month: 2, a: 30, b: 40, c: 30 }, { month: 3, a: 30, b: 40, c: 30 }, { month: 4, a: 40, b: 40, c: 20 }, { month: 5, a: 50, b: 40, c: 10 }, { month: 6, a: 30, b: 20, c: 50 }, { month: 7, a: 10, b: 30, c: 60 }, { month: 8, a: 30, b: 50, c: 20 }, { month: 9, a: 70, b: 10, c: 20 }, { month: 10, a: 50, b: 40, c: 10 }, { month: 11, a: 30, b: 40, c: 30 }, { month: 12, a: 50, b: 20, c: 30 }];

            var stackAreaChart = new _StackAreaChart2.default({
                width: 700,
                height: 400,
                margin: {
                    top: 30,
                    right: 30,
                    bottom: 30,
                    left: 30
                },
                data: stackData
            });
        }
    }]);

    return Application;
}();

exports.default = Application;

},{"./chart/LineChart":3,"./chart/PieChart":4,"./chart/StackAreaChart":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chart = function () {
    function Chart(props) {
        _classCallCheck(this, Chart);

        this.width = props.width;
        this.height = props.height;
        this.margin = props.margin;
        this.initData = props.initData;
        this.data = props.data;

        this._init();
        this._renderAxis();
        this._renderBody();
    }

    _createClass(Chart, [{
        key: "_init",
        value: function _init() {
            var _this = this;

            this._initScales();
            this.xAxis = d3.svg.axis().scale(this.xScale).orient("bottom");
            this.yAxis = d3.svg.axis().scale(this.yScale).orient("left");

            this.line = d3.svg.line().interpolate("cardinal").x(function (d) {
                return _this.xScale(d[_this.xPath]);
            }).y(function (d) {
                return _this.yScale(d[_this.yPath]);
            });

            this.svg = d3.select("body").append("svg").style("width", this.width).style("height", this.height).style("background-color", "rgba(0, 0, 0, 0.1)");
        }
    }, {
        key: "_initScales",
        value: function _initScales() {
            var _this2 = this;

            this.xScale = d3.scale.linear().domain(d3.extent(this.data, function (item) {
                return item[_this2.xPath];
            })).range([0, this.width - this.margin.left - this.margin.right]);
            this.yScale = d3.scale.linear().domain(d3.extent(this.data, function (item) {
                return item[_this2.xPath];
            })).range([this.height - this.margin.top - this.margin.bottom, 0]);
        }
    }, {
        key: "_renderAxis",
        value: function _renderAxis() {
            this._renderAxisX();
            this._renderAxisY();
        }
    }, {
        key: "_renderAxisX",
        value: function _renderAxisX() {
            var _this3 = this;

            console.log(this.svg);
            if (this.axisXGroup === undefined) {
                this.axisXGroup = this.svg.append("g").classed("axis axis-x", true).attr("transform", "translate(" + this.margin.left + ", " + (this.height - this.margin.bottom) + ")");
            }

            this.xScale.domain(d3.extent(this.data, function (item) {
                return item[_this3.xPath];
            }));
            this.axisXGroup.transition().duration(600).call(this.xAxis);
        }
    }, {
        key: "_renderAxisY",
        value: function _renderAxisY() {
            var _this4 = this;

            if (this.axisYGroup === undefined) {
                this.axisYGroup = this.svg.append("g").classed("axis axis-y", true).attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            }

            this.yScale.domain(d3.extent(this.data, function (item) {
                return item[_this4.yPath];
            }));
            this.axisYGroup.transition().duration(600).call(this.yAxis);
        }
    }, {
        key: "_renderBody",
        value: function _renderBody() {
            this.bodyGroup = this.svg.append("g").attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")").classed("svg-body", true);
        }
    }]);

    return Chart;
}();

exports.default = Chart;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Chart2 = require("./Chart");

var _Chart3 = _interopRequireDefault(_Chart2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineChart = function (_Chart) {
    _inherits(LineChart, _Chart);

    function LineChart(props) {
        _classCallCheck(this, LineChart);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LineChart).call(this, props));

        _this.xPath = props.xPath;
        _this.yPath = props.yPath;
        _this.render();
        return _this;
    }

    _createClass(LineChart, [{
        key: "render",
        value: function render() {
            this._renderLine();
        }
    }, {
        key: "_renderLine",
        value: function _renderLine() {
            if (this.linePath === undefined) {
                this.linePath = this.bodyGroup.append("path").classed("line", true).datum(this.data);
                //.attr("d", this.line(this.initData));
            }

            _get(Object.getPrototypeOf(LineChart.prototype), "_renderAxis", this).call(this);
            this.linePath.transition().duration(600).attr("d", this.line);
        }
    }]);

    return LineChart;
}(_Chart3.default);

exports.default = LineChart;

},{"./Chart":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PieChart = function () {
    function PieChart(props) {
        _classCallCheck(this, PieChart);

        this.width = props.width;
        this.height = props.height;
        this.margin = props.margin;
        this.data = props.data;
        this.colors = props.colors;
        console.log(this);
        this._init();
        this._renderPie();
    }

    _createClass(PieChart, [{
        key: "_init",
        value: function _init() {
            this.svg = d3.select("body").append("svg").style("width", this.width).style("height", this.height).append("g").attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            var radius = Math.min(this.width, this.height) / 2;
            this.svg.append("g").attr("class", "slices").attr("transform", "translate(" + radius + "," + radius + ")");
            this.pie = d3.layout.pie().sort(null).value(function (d) {
                return d.value;
            });
            this.colorScale = d3.scale.ordinal().domain(this.data.map(function (pair) {
                return pair.key;
            })).range(this.colors);
            this.arc = d3.svg.arc().outerRadius(radius * 0.8).innerRadius(radius * 0.5);
        }
    }, {
        key: "_renderPie",
        value: function _renderPie() {
            var _this = this;

            this.slices = this.svg.select(".slices").selectAll("path.slice")
            // TODO why d => d.data.key rather than d.key
            .data(this.pie(this.data), function (d) {
                return d.data.key;
            });
            this.slices.enter().append("path").style("fill", function (d) {
                return _this.colorScale(d.data.key);
            }).attr("class", "slice").attr("d", this.arc);
            var that = this;
            this.slices.transition().duration(1000).attrTween("d", function (d) {
                this._current = this._current || d;
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function (t) {
                    return that.arc(interpolate(t));
                };
            });
            this.slices.exit().remove();
        }
    }, {
        key: "refresh",
        value: function refresh(data) {
            this.data = data;
            this._renderPie();
        }
    }]);

    return PieChart;
}();

exports.default = PieChart;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Chart2 = require("./Chart");

var _Chart3 = _interopRequireDefault(_Chart2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StackAreaChart = function (_Chart) {
    _inherits(StackAreaChart, _Chart);

    function StackAreaChart(props) {
        _classCallCheck(this, StackAreaChart);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StackAreaChart).call(this, props));

        _this.render();
        return _this;
    }

    _createClass(StackAreaChart, [{
        key: "render",
        value: function render() {
            this._renderStackAreaChart();
        }
    }, {
        key: "_init",
        value: function _init() {
            var _this2 = this;

            _get(Object.getPrototypeOf(StackAreaChart.prototype), "_init", this).call(this);

            this.area = d3.svg.area().x(function (d) {
                return _this2.xScale(d.x);
            }).y0(function (d) {
                return _this2.yScale(d.y0);
            }).y1(function (d) {
                return _this2.yScale(d.y + d.y0);
            });

            this.areaStack = d3.layout.stack().values(function (d) {
                return d.values;
            });

            this.colorScale = d3.scale.category10();
        }
    }, {
        key: "_renderStackAreaChart",
        value: function _renderStackAreaChart() {
            var _this3 = this;

            var formatData = this._dataProcess(this.data);
            if (this.stackPath === undefined) {
                this.stackPath = this.bodyGroup.selectAll("path").data(this.areaStack(formatData)).enter().append("path").attr("class", function (item) {
                    return "area " + item.name;
                });
            }

            this.stackPath.attr("d", function (d) {
                return _this3.area(d.values);
            }).style("fill", function (d, i) {
                return _this3.colorScale(i);
            });
        }
    }, {
        key: "_dataProcess",
        value: function _dataProcess(data) {
            var result = [{
                name: "A",
                values: []
            }, {
                name: "B",
                values: []
            }, {
                name: "C",
                values: []
            }];

            data.forEach(function (item) {
                result[0].values.push({
                    x: item.month,
                    y: item.a
                });
                result[1].values.push({
                    x: item.month,
                    y: item.b
                });
                result[2].values.push({
                    x: item.month,
                    y: item.c
                });
                return item;
            });

            return result;
        }
    }, {
        key: "_initScales",
        value: function _initScales() {
            this.xScale = d3.scale.linear().domain([0, 12]).range([0, this.width - this.margin.left - this.margin.right]);
            this.yScale = d3.scale.linear().domain([0, 100]).range([this.height - this.margin.top - this.margin.bottom, 0]);
        }
    }, {
        key: "_renderAxisX",
        value: function _renderAxisX() {
            if (this.axisXGroup === undefined) {
                this.axisXGroup = this.svg.append("g").classed("axis axis-x", true).attr("transform", "translate(" + this.margin.left + ", " + (this.height - this.margin.bottom) + ")");
            }
            this.axisXGroup.transition().duration(600).call(this.xAxis);
        }
    }, {
        key: "_renderAxisY",
        value: function _renderAxisY() {
            if (this.axisYGroup === undefined) {
                this.axisYGroup = this.svg.append("g").classed("axis axis-y", true).attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
            }

            this.axisYGroup.transition().duration(600).call(this.yAxis);
        }
    }]);

    return StackAreaChart;
}(_Chart3.default);

exports.default = StackAreaChart;

},{"./Chart":2}],6:[function(require,module,exports){
"use strict";

var _Application = require("./Application");

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _Application2.default();
app.run();

},{"./Application":1}]},{},[6])
!(function (t) {
	function e(s) {
		if (i[s]) return i[s].exports;
		var n = (i[s] = { exports: {}, id: s, loaded: !1 });
		return t[s].call(n.exports, n, n.exports, e), (n.loaded = !0), n.exports;
	}
	var i = {};
	return (e.m = t), (e.c = i), (e.p = ""), e(0);
})([
	function (t, e, i) {
		var s = i(1).DragCheck;
		window.DragCheck = s;
	},
	function (t, e) {
		"use strict";
		function i(t) {
			(this.options = t || {}),
				(this.triggerChangeOnDragEnd = !1),
				(this.checkState = null),
				(this.selectionList = []),
				(this.checkboxes = Array.isArray(t) ? t : t.checkboxes),
				this.attachEvents(this.checkboxes),
				document.body.addEventListener("mouseup", this.dragEnd.bind(this));
		}
		(i.prototype.attachEvents = function (t) {
			t.forEach(function (t) {
				t.addEventListener("mousedown", this.mouseDown.bind(this, t)),
					t.addEventListener("mouseup", this.dragEnd.bind(this, t)),
					t.addEventListener("mouseenter", this.mouseEnter.bind(this, t)),
					this.options.clickToToggle &&
						t.addEventListener(
							"click",
							function (e) {
								var i = !this.getChecked(t);
								this.setChecked(t, i);
							}.bind(this)
						);
			}, this);
		}),
			(i.prototype.mouseDown = function (t) {
				(this.checkState = !this.getChecked(t)), (this.selectionList = [t]);
			}),
			(i.prototype.dragEnd = function (t) {
				this.options.deferChangeTrigger &&
					this.selectionList.forEach(this.triggerChange.bind(this)),
					this.options.onDragEnd && this.options.onDragEnd(this.selectionList),
					(this.checkState = null),
					(this.selectionList = []);
			}),
			(i.prototype.triggerChange = function (t) {
				void 0 !== this.options.onChange
					? this.options.onChange(t)
					: t.dispatchEvent(new Event("change"));
			}),
			(i.prototype.setChecked = function (t, e) {
				this.options.setChecked
					? this.options.setChecked(t, e)
					: (t.checked = e),
					this.options.deferChangeTrigger || this.triggerChange(t);
			}),
			(i.prototype.getChecked = function (t) {
				return this.options.getChecked ? this.options.getChecked(t) : t.checked;
			}),
			(i.prototype.mouseEnter = function (t) {
				null !== this.checkState &&
					(1 === this.selectionList.length &&
						this.setChecked(this.selectionList[0], this.checkState),
					this.selectionList.push(t),
					this.setChecked(t, this.checkState));
			}),
			(e.DragCheck = i);
	}
]);

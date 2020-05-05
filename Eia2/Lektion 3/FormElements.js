var L03_FormElements;
(function (L03_FormElements) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        var fieldsets = document.querySelectorAll("fieldset");
        // Install listeners on fieldsets
        for (var i = 0; i < fieldsets.length; i++) {
            var fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }
    function handleChange(_event) {
        var target = _event.target;
        console.log();
        if (_event.type == "change")
            console.warn("Change: " + target.name + " = " + target.value, _event);
        else
            console.log("Input: " + target.name + " = " + target.value, _event);
        if (target.type == "checkbox")
            console.log("Checked: " + target.name + " = " + target.checked);
        if (target.name == "Slider") {
            var progress = document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        if (target.name == "Stepper") {
            var meter = document.querySelector("meter");
            meter.value = parseFloat(target.value);
        }
        if (target.name == "Color") {
            var ouput = document.querySelector("output");
            ouput.value = target.value;
        }
    }
})(L03_FormElements || (L03_FormElements = {}));
//# sourceMappingURL=FormElements.js.map
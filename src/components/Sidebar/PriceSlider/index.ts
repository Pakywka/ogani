import * as React from 'react';
import type { HandlesProps } from 'rc-slider/lib/Handles';
import type { AriaValueFormat } from 'rc-slider/lib/interface';
import type { MarkObj } from 'rc-slider/lib/Marks';
import { PriceRange } from '../../../store/filter/types';

/**
 * New:
 * - click mark to update range value
 * - handleRender
 * - Fix handle with count not correct
 * - Fix pushable not work in some case
 * - No more FindDOMNode
 * - Move all position related style into inline style
 * - Key: up is plus, down is minus
 * - fix Key with step = null not align with marks
 * - Change range should not trigger onChange
 * - keyboard support pushable
 */
export interface SliderProps<ValueType = PriceRange['minPrice'] | PriceRange['maxPrice']> {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    autoFocus?: boolean;
    onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
    range?: boolean;
    count?: number;
    min?: number;
    max?: number;
    step?: number | null;
    value?: ValueType;
    defaultValue?: ValueType;
    onChange?: (value: ValueType) => void;
    /** @deprecated It's always better to use `onChange` instead */
    onBeforeChange?: (value: ValueType) => void;
    /** @deprecated It's always better to use `onChange` instead */
    onAfterChange?: (value: ValueType) => void;
    allowCross?: boolean;
    pushable?: boolean | number;
    /** range only */
    draggableTrack?: boolean;
    reverse?: boolean;
    vertical?: boolean;
    included?: boolean;
    startPoint?: number;
    trackStyle?: React.CSSProperties | React.CSSProperties[];
    handleStyle?: React.CSSProperties | React.CSSProperties[];
    railStyle?: React.CSSProperties;
    dotStyle?: React.CSSProperties | ((dotValue: number) => React.CSSProperties);
    activeDotStyle?: React.CSSProperties | ((dotValue: number) => React.CSSProperties);
    marks?: Record<string | number, React.ReactNode | MarkObj>;
    dots?: boolean;
    handleRender?: HandlesProps['handleRender'];
    tabIndex?: number | number[];
    ariaLabelForHandle?: string | string[];
    ariaLabelledByForHandle?: string | string[];
    ariaValueTextFormatterForHandle?: AriaValueFormat | AriaValueFormat[];
}
export interface SliderRef {
    focus: () => void;
    blur: () => void;
}
export declare const PriceSlider: React.ForwardRefExoticComponent<
    SliderProps<PriceRange['minPrice'] | PriceRange['maxPrice']> & React.RefAttributes<SliderRef>
>;

export default PriceSlider;

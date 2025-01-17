import { Component } from 'react';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';
import ConfigProvider from '../config-provider';
import { obj } from '../util';
import Sup from './sup';
import type { BadgeProps } from './types';

export type { BadgeProps };

/**
 * Badge
 */
class Badge extends Component<BadgeProps> {
    static propTypes = {
        // 样式类名的品牌前缀
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        // 自定义类名
        className: PropTypes.string,
        // 自定义内联样式
        style: PropTypes.object,
        /**
         * 徽标依托的内容，一般显示在其右上方
         */
        children: PropTypes.node,
        /**
         * 展示的数字，大于 `overflowCount` 时显示为 `${overflowCount}+`，为 `0` 时默认隐藏
         */
        count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * 当`count`为`0`时，是否显示 count
         * @version 1.16
         */
        showZero: PropTypes.bool,
        /**
         * 自定义徽标中的内容
         */
        content: PropTypes.node,
        /**
         * 展示的封顶的数字
         */
        overflowCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * 不展示数字，只展示一个小红点
         */
        dot: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        count: 0,
        showZero: false,
        overflowCount: 99,
        dot: false,
    };

    render() {
        const {
            prefix,
            dot,
            className,
            children,
            content,
            style,
            rtl,
            count: originCount,
            showZero,
            overflowCount: originOverflowCount,
        } = this.props;
        const count = parseInt(originCount as string, 10);
        const overflowCount = parseInt(originOverflowCount as string, 10);
        const others = obj.pickOthers(Badge.propTypes, this.props);

        // 如果是数字，则添加默认的 title
        if (count || (count === 0 && showZero)) {
            others.title = others.title || `${count}`;
        }

        const classes = classNames(
            `${prefix}badge`,
            {
                [`${prefix}badge-not-a-wrapper`]: !children,
            },
            className
        );

        return (
            <span dir={rtl ? 'rtl' : undefined} className={classes} {...others}>
                {children}
                <Sup
                    {...{
                        prefix,
                        content,
                        count,
                        showZero,
                        overflowCount,
                        dot,
                        style,
                    }}
                />
            </span>
        );
    }
}

export default ConfigProvider.config(Badge);

/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ButtonProps } from '../button';
import { PopoverProps } from '../popover';
import { TNode, AttachNode } from '../common';

export interface TdGuideProps {
  /**
   * 透传 返回按钮 的全部属性，示例：`{ content: '返回', theme: 'default' }`
   */
  backButtonProps?: ButtonProps;
  /**
   * 当前步骤，即整个引导的进度。-1 则不展示，用于需要中断展示的场景
   */
  current?: number;
  /**
   * 当前步骤，即整个引导的进度。-1 则不展示，用于需要中断展示的场景，非受控属性
   */
  defaultCurrent?: number;
  /**
   * 当前步骤，即整个引导的进度。-1 则不展示，用于需要中断展示的场景
   */
  modelValue?: number;
  /**
   * 透传 完成按钮 的全部属性，示例：`{ content: '完成', theme: 'primary' }`
   */
  finishButtonProps?: ButtonProps;
  /**
   * 是否隐藏返回按钮
   * @default false
   */
  hideBack?: boolean;
  /**
   * 是否隐藏计数
   * @default false
   */
  hideCounter?: boolean;
  /**
   * 是否隐藏跳过按钮
   * @default false
   */
  hideSkip?: boolean;
  /**
   * 高亮框的内边距
   * @default 8
   */
  highlightPadding?: number;
  /**
   * 引导框的类型
   * @default popover
   */
  mode?: 'popover' | 'dialog';
  /**
   * 透传 下一步按钮 的全部属性，示例：{ content: '下一步', theme: 'primary' }
   */
  nextButtonProps?: ButtonProps;
  /**
   * 是否出现遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 透传 跳过按钮 的全部属性，{ content: '跳过', theme: 'default' }
   */
  skipButtonProps?: ButtonProps;
  /**
   * 用于定义每个步骤的内容，包括高亮的节点、相对位置和具体的文案内容等
   */
  steps?: Array<GuideStep>;
  /**
   * 提示框的层级
   * @default 999999
   */
  zIndex?: number;
  /**
   * 点击返回按钮时触发
   */
  onBack?: (context: { e: MouseEvent; current: number; total: number }) => void;
  /**
   * 当前步骤发生变化时触发
   */
  onChange?: (current: number, context?: { e: MouseEvent; total: number }) => void;
  /**
   * 点击完成按钮时触发
   */
  onFinish?: (context: { e: MouseEvent; current: number; total: number }) => void;
  /**
   * 点击下一步时触发
   */
  onNextStepClick?: (context: { e: MouseEvent; next: number; current: number; total: number }) => void;
  /**
   * 点击跳过按钮时触发
   */
  onSkip?: (context: { e: MouseEvent; current: number; total: number }) => void;
}

export interface GuideStep {
  /**
   * 用于自定义当前引导框的返回按钮的内容
   */
  backButtonProps?: ButtonProps;
  /**
   * 当前步骤提示框的内容
   */
  body?: string | TNode;
  /**
   * 用户自定义引导弹框的内容，一旦存在，此时除 `placement`、`offset`和`element` 外，其它属性全部失效）
   */
  content?: TNode;
  /**
   * 高亮的节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'#tdesign' 或 () => document.querySelector('#tdesign')
   */
  element: AttachNode;
  /**
   * 用户自定义的高亮框 (仅当 `mode` 为 `popover` 时生效)
   */
  highlightContent?: TNode;
  /**
   * 高亮框的内边距
   */
  highlightPadding?: number;
  /**
   * 引导框的类型
   */
  mode?: 'popover' | 'dialog';
  /**
   * 用于自定义当前引导框的下一步按钮的内容
   */
  nextButtonProps?: ButtonProps;
  /**
   * 【讨论确认中】相对于 placement 的偏移量，示例：[-10, 20] 或 ['10px', '8px']
   */
  offset?: Array<string | number>;
  /**
   * 引导框相对于高亮元素出现的位置，(仅当 `mode` 为 `popover` 时生效)
   * @default 'top'
   */
  placement?: StepPopoverPlacement;
  /**
   * 透传全部属性到 Popover 组件。`mode=popover` 时有效
   */
  popoverProps?: PopoverProps;
  /**
   * 是否出现遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 用于自定义当前步骤引导框的跳过按钮的内容
   */
  skipButtonProps?: ButtonProps;
  /**
   * 当前步骤的标题内容
   */
  title?: string | TNode;
}

export type StepPopoverPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom'
  | 'center';

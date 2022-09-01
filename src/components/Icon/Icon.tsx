import React, { ReactNode } from "react";
import { animated, useSpring } from "react-spring";
import classNames from 'classnames/bind';
import * as FeatherIcon from 'react-feather';
import { ICONS, KINDS, SIZES, COLORS } from "../../values/constants";
//@ts-ignore
import styles from "./Icon.module.scss";

export type IconType = typeof ICONS[ keyof typeof ICONS ];
export type IconKind = typeof KINDS[ keyof typeof KINDS ];
export type IconSize = typeof SIZES[ keyof typeof SIZES ];
const defaultProps = Object.freeze({ kind: KINDS.Primary, size: SIZES.Medium, rotation: 0, alt: "" });
type IconProps = { type: IconType; kind?: IconKind, size?: IconSize,
	rotation?: number, alt?: string } & typeof defaultProps;
type FeatherProps = { color: string, size: number, alt: string };

let cx = classNames.bind(styles);

const Icon = (props: IconProps) : (JSX.Element | null) => {
	const { type, kind, size, rotation, alt } = props;
	const args = { color: colorMap.get(kind), size: sizeMap.get(size), alt: alt };
	const rotate = useSpring({
		to: {transform: `rotate(${rotation}deg)`}
	});
	return <animated.div className={cx('Icon')} style={rotate}>
		{(iconMap.get(type) || (x => null) )(args)}
	</animated.div>
};

Icon.defaultProps = defaultProps;
export default Icon;

const colorMap = new Map<IconKind, string>([
	[ KINDS.Primary, COLORS.Grayscale00 ],
	[ KINDS.Secondary, COLORS.Grayscale80 ]
]);

const sizeMap = new Map<IconSize, number>([
	[SIZES.Small, 16],
	[SIZES.Medium, 24],
	[SIZES.Large, 32]
]);

const iconMap = new Map<IconType, (args: FeatherProps) => ReactNode>([
	[ICONS.ArrowUp, args => <FeatherIcon.ArrowUp {...args} />],
	[ICONS.ArrowRight, args => <FeatherIcon.ArrowRight {...args} />],
	[ICONS.ArrowDown, args => <FeatherIcon.ArrowDown {...args} />],
	[ICONS.ArrowLeft, args => <FeatherIcon.ArrowLeft {...args} />],
	[ICONS.Maximize, args => <FeatherIcon.Maximize {...args} />],
	[ICONS.Minimize, args => <FeatherIcon.Minimize {...args} />],
]);
/*
{ Activity, Airplay, AlertCircle, AlertOctagon, AlertTriangle, AlignCenter, AlignJustify, AlignLeft, AlignRight,
	Anchor, Aperture, Archive, ArrowDownCircle, ArrowDownLeft, ArrowDownRight, ArrowDown, ArrowLeftCircle, ArrowLeft,
	ArrowRightCircle, ArrowRight, ArrowUpCircle, ArrowUpLeft, ArrowUpRight, ArrowUp, AtSign, Award, BarChart, BarChart2,
	BatteryCharging, Battery, BellOff, Bell, Bluetooth, Bold, BookOpen, Book, Bookmark, Box, Briefcase, Calendar,
	CameraOff, Camera, Cast, CheckCircle, CheckSquare, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp,
	ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsUp, Chrome, Circle, Clipboard, Clock, CloudDrizzle,
	CloudLightning, CloudOff, CloudRain, CloudSnow, Cloud, Code, Codepen, Codesandbox, Coffee, Columns, Command, Compass,
	Copy, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft,
	CornerUpRight, Cpu, CreditCard, Crop, Crosshair, Database, Delete, Disc, DivideCircle, DivideSquare, Divide,
	DollarSign, DownloadCloud, Download, Dribbble, Droplet, Edit, Edit2, Edit3, ExternalLink, EyeOff, Eye, Facebook,
FastForward, Feather, Figma, FileMinus, FilePlus, FileText, File, Film, Filter, Flag, FolderMinus, FolderPlus,
Folder, Framer, Frown, Gift, GitBranch, GitCommit, GitMerge, GitPullRequest, GitHub, Gitlab, Globe, Grid, HardDrive,
Hash, Headphones, Heart, HelpCircle, Hexagon, Home, Image, Inbox, Info, Instagram, Italic, Key, Layers, Layout,
LifeBuoy, Link, Link2, Linkedin, List, Loader, Lock, LogIn, LogOut, Mail, MapPin, Map as MapIcon, Maximize,
Maximize2, Meh, Menu, MessageCircle, MessageSquare, MicOff, Mic, Minimize, Minimize2, MinusCircle, MinusSquare,
Minus, Monitor, Moon, MoreHorizontal, MoreVertical, MousePointer, Move, Music, Navigation, Navigation2, Octagon,
Package, Paperclip, PauseCircle, Pause, PenTool, Percent, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed,
PhoneOff, PhoneOutgoing, Phone, PieChart, PlayCircle, Play, PlusCircle, PlusSquare, Plus, Pocket, Power, Printer,
Radio, RefreshCcw, RefreshCw, Repeat, Rewind, RotateCcw, RotateCw, Rss, Save, Scissors, Search, Send, Server,
Settings, Share, Share2, ShieldOff, Shield, ShoppingBag, ShoppingCart, Shuffle, Sidebar, SkipBack, SkipForward,
Slack, Slash, Sliders, Smartphone, Smile, Speaker, Square, Star, StopCircle, Sun, Sunrise, Sunset, Table, Tablet,
Tag, Target, Terminal, Thermometer, ThumbsDown, ThumbsUp, ToggleLeft, ToggleRight, Tool, Trash, Trash2, Trello,
TrendingDown, TrendingUp, Triangle, Truck, Tv, Twitch, Twitter, Type, Umbrella, Underline, Unlock, Upload,
UploadCloud, UserCheck, UserMinus, UserPlus, UserX, User, Users, VideoOff, Video, Voicemail, Volume, Volume1,
Volume2, VolumeX, Watch, WifiOff, Wifi, Wind, XCircle, XOctagon, XSquare, X, Youtube, ZapOff, Zap,
ZoomIn, ZoomOut }
 */
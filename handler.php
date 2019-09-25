<?php

require_once __DIR__ . '/mailer/Validator.php';
require_once __DIR__ . '/mailer/ContactMailer.php';

if (!Validator::isAjax() || !Validator::isPost()) {
	echo 'Доступ запрещен!';
	exit;
}

$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : null;
$phone = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : null;

if (empty($name) || empty($phone)) {
	echo 'Все поля обязательны для заполнения.';
	exit;
}

if (!Validator::isValidPhone($phone)) {
	echo 'Телефон не соответствует формату.';
	exit;
}

if (ContactMailer::send($name, $phone)) {
	echo htmlspecialchars($name) . ', ваше сообщение успешно отправлено.';
} else {
	echo 'Произошла ошибка! Не удалось отправить сообщение.';
}
exit;